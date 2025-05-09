import { ArrowRightOutlined, OpenAIOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button, Form, Popover, Select, Tag, message, Modal, Input } from 'antd'
import type { MessageInstance } from 'antd/es/message/interface'
import type { HookAPI } from 'antd/es/modal/useModal'
import { useEffect, useState } from 'react'
import occupations from './occupations.json'

type Occupation = {
	uuid: string
	name: string
	description: string
	firstAlphabet: string
	secondAlphabet: string
	thirdAlphabet: string
}
type SelectedOccupations = Occupation[]
type CurrentOccupation = Occupation | null

export default function App() {
	const [currentOccupation, setCurrentOccupation] =
		useState<CurrentOccupation>(null)
	const [selectedOccupations, setSelectedOccupations] =
		useState<SelectedOccupations>([])
	const [messageApi, contextHolder] = message.useMessage()
	const [modal, contextHolderModal] = Modal.useModal()

	return (
		<main className='w-dvw h-dvh flex flex-row items-center justify-between gap-4 p-4'>
			<div className='w-1/3 h-full'>
				<Selector
				  modal={modal}
					messageApi={messageApi}
					currentOccupation={currentOccupation}
					selectedOccupations={selectedOccupations}
					setCurrentOccupation={setCurrentOccupation}
					setSelectedOccupations={setSelectedOccupations}
				/>
			</div>
			<div className='w-2/3 h-full'>
				<Displayer 
					modal={modal}
				  selectedOccupations={selectedOccupations} 
					setSelectedOccupations={setSelectedOccupations}
				/>
			</div>
			{contextHolder}
			{contextHolderModal}
		</main>
	)
}

function Displayer({
	selectedOccupations,
	setSelectedOccupations,
	modal,
}: {
	selectedOccupations: SelectedOccupations
	setSelectedOccupations: React.Dispatch<
		React.SetStateAction<SelectedOccupations>
	>
	modal: HookAPI
}) {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center p-4 gap-4'>
			{selectedOccupations.length > 0 &&
				selectedOccupations.map((occupation) => (
					<div
						key={occupation.uuid}
						className='w-full border border-gray-300 rounded-md p-3 pl-4 flex flex-col gap-2'
					>
						<div className='flex flex-row justify-between'>
							<div className='flex flex-row gap-2 items-center'>
								<div className='font-bold text-base text-nowrap'>{occupation.name}</div>
								<div>
									<Tag color='blue'>
										{occupation.firstAlphabet}
										{occupation.secondAlphabet}
										{occupation.thirdAlphabet}
									</Tag>
								</div>
								<Input placeholder='买家' style={{ width: '6rem' }} />
								<Input placeholder='价格' style={{ width: '6rem' }} />
							</div>
							<div>
								<Popover
									content='AI解读'
									trigger='hover'
								>
									<Button
										icon={<OpenAIOutlined />}
										onClick={() => showAiInterpretation(occupation, modal, false)}
									/>
								</Popover>
								<Button
									icon={<DeleteOutlined />}
									onClick={() => {
										const newSelectedOccupations =
											selectedOccupations.filter(
												(selectedOccupation) =>
													selectedOccupation.uuid !== occupation.uuid,
											)
										setSelectedOccupations(newSelectedOccupations)
									}}
									className='ml-3'
								/>
							</div>
						</div>
					</div>
				))}
		</div>
	)
}

function Selector({
	currentOccupation,
	selectedOccupations,
	setCurrentOccupation,
	setSelectedOccupations,
	messageApi,
	modal,
}: {
	currentOccupation: CurrentOccupation
	selectedOccupations: SelectedOccupations
	setCurrentOccupation: React.Dispatch<React.SetStateAction<CurrentOccupation>>
	setSelectedOccupations: React.Dispatch<
		React.SetStateAction<SelectedOccupations>
	>
	messageApi: MessageInstance
	modal: HookAPI
}) {
	const codes = [
		{ value: 'R', label: 'R - 现实型' },
		{ value: 'I', label: 'I - 研究型' },
		{ value: 'A', label: 'A - 艺术型' },
		{ value: 'S', label: 'S - 社会型' },
		{ value: 'E', label: 'E - 企业型' },
		{ value: 'C', label: 'C - 常规型' },
	]
	const [form] = Form.useForm<{
		firstAlphabet?: string
		secondAlphabet?: string
		thirdAlphabet?: string
	}>()
	const [loading, setLoading] = useState<boolean>(false)
	useEffect(() => {
		if (loading) {
			const timer = setInterval(() => {
				const randomOccupations =
					occupations[Math.floor(Math.random() * occupations.length)]
				setCurrentOccupation(randomOccupations)
			}, 50)
			return () => clearTimeout(timer)
		}
	}, [loading, setCurrentOccupation])

	return (
		<div className='w-full h-full flex flex-col items-center justify-center p-4'>
			<Form form={form} layout='vertical' className='w-full p-4'>
				<Form.Item>
					<ShowCurrentOccupation
					  modal={modal}
						loading={loading}
						currentOccupation={currentOccupation}
						setCurrentOccupation={setCurrentOccupation}
						setSelectedOccupations={setSelectedOccupations}
					/>
				</Form.Item>
				<Form.Item
					name='firstAlphabet'
					label='第一个霍兰德代码'
					rules={[
						({ getFieldValue }) => ({
							validator(_, value) {
								if (
									value &&
									getFieldValue('firstAlphabet') ===
										getFieldValue('secondAlphabet')
								) {
									return Promise.reject(new Error('三个霍兰德代码不能相同'))
								}
								if (
									value &&
									getFieldValue('firstAlphabet') ===
										getFieldValue('thirdAlphabet')
								) {
									return Promise.reject(new Error('三个霍兰德代码不能相同'))
								}
								return Promise.resolve()
							},
						}),
					]}
				>
					<Select options={codes} placeholder='不限' />
				</Form.Item>
				<Form.Item
					name='secondAlphabet'
					label='第二个霍兰德代码'
					rules={[
						({ getFieldValue }) => ({
							validator(_, value) {
								if (
									value &&
									getFieldValue('secondAlphabet') ===
										getFieldValue('firstAlphabet')
								) {
									return Promise.reject(new Error('三个霍兰德代码不能相同'))
								}
								if (
									value &&
									getFieldValue('secondAlphabet') ===
										getFieldValue('thirdAlphabet')
								) {
									return Promise.reject(new Error('三个霍兰德代码不能相同'))
								}
								return Promise.resolve()
							},
						}),
					]}
				>
					<Select options={codes} placeholder='不限' />
				</Form.Item>
				<Form.Item
					name='thirdAlphabet'
					label='第三个霍兰德代码'
					rules={[
						({ getFieldValue }) => ({
							validator(_, value) {
								if (
									value &&
									getFieldValue('thirdAlphabet') ===
										getFieldValue('firstAlphabet')
								) {
									return Promise.reject(new Error('三个霍兰德代码不能相同'))
								}
								if (
									value &&
									getFieldValue('thirdAlphabet') ===
										getFieldValue('secondAlphabet')
								) {
									return Promise.reject(new Error('三个霍兰德代码不能相同'))
								}
								return Promise.resolve()
							},
						}),
					]}
				>
					<Select options={codes} placeholder='不限' />
				</Form.Item>
				<Form.Item>
					<div className='flex flex-row items-center justify-between gap-3'>
						<div className='w-1/3'>
							<Button
								block
								disabled={loading}
								onClick={() => {
									setLoading(false)
									setCurrentOccupation(null)
									setSelectedOccupations([])
								}}
							>
								重置
							</Button>
						</div>
						<div className='w-1/3'>
							<Button
								block
								disabled={loading}
								onClick={() => {
									setLoading(true)
								}}
							>
								开始
							</Button>
						</div>
						<div className='w-1/3'>
							<Button
								block
								disabled={!loading}
								onClick={() => {
									setLoading(false)
									const { firstAlphabet, secondAlphabet, thirdAlphabet } =
										form.getFieldsValue()
									const availableOccupations = occupations
										.filter(
											(occupation) =>
												(!firstAlphabet ||
													occupation.firstAlphabet === firstAlphabet) &&
												(!secondAlphabet ||
													occupation.secondAlphabet === secondAlphabet) &&
												(!thirdAlphabet ||
													occupation.thirdAlphabet === thirdAlphabet),
										)
										.filter(
											(occupation) =>
												!selectedOccupations.some(
													(selectedOccupation) =>
														selectedOccupation.uuid === occupation.uuid,
												),
										)
									if (availableOccupations.length === 0) {
										messageApi.open({
											type: 'error',
											content: '没有符合条件的职业',
										})
										return
									}
									const randomOccupations =
										availableOccupations[
											Math.floor(Math.random() * availableOccupations.length)
										]
									setCurrentOccupation(randomOccupations)
									form.resetFields()
								}}
							>
								停止
							</Button>
						</div>
					</div>
				</Form.Item>
				<hr className='border-gray-300 mb-5' />
				<Form.Item>
					<div className='grid grid-cols-3 grid-rows-2 gap-2'>
						{codes.map((code) => (
							<div key={code.value} className='w-full text-center border border-gray-300 rounded-md bg-gray-50'>
								{code.label}
							</div>
						))}
					</div>
				</Form.Item>
			</Form>
		</div>
	)
}

function ShowCurrentOccupation({
	loading,
	currentOccupation,
	setCurrentOccupation,
	setSelectedOccupations,
	modal,
}: {
	loading: boolean
	currentOccupation: CurrentOccupation
	setCurrentOccupation: React.Dispatch<React.SetStateAction<CurrentOccupation>>
	setSelectedOccupations: React.Dispatch<
		React.SetStateAction<SelectedOccupations>
	>
	modal: HookAPI
}) {

	return (
		<div className='w-full h-full flex flex-col items-center justify-center border border-gray-300 rounded-md p-4'>
			{currentOccupation ? (
				<div className='text-base flex flex-row items-center justify-center gap-2'>
					<div className='ml-8'>
						<Tag color='blue'>
							{currentOccupation.firstAlphabet}
							{currentOccupation.secondAlphabet}
							{currentOccupation.thirdAlphabet}
						</Tag>
					</div>
					<div className='mr-2 font-bold'>{currentOccupation.name}</div>
					{!loading && (
						<Popover
							content='AI解读'
							trigger='hover'
						>
							<Button 
							  icon={<OpenAIOutlined />}
							  onClick={() => showAiInterpretation(currentOccupation, modal)}
							/>
						</Popover>
					)}
					{!loading && (
						<Button
							icon={<ArrowRightOutlined />}
							onClick={() => {
								setSelectedOccupations((prev) => [currentOccupation, ...prev])
								setCurrentOccupation(null)
							}}
						/>
					)}
				</div>
			) : (
				<div className='text-base font-bold'>请选择职业</div>
			)}
		</div>
	)
}

function ShowTyping({
	content
}: {
	content: string
}) {
	const [showContent, setShowContent] = useState<string>('')
  useEffect(() => {
		const timer = setTimeout(() => {
			if (showContent.length < content.length) {
				setShowContent((prev) => prev + content[showContent.length])
			}
		}, Math.random() * 20 + 30)
		return () => clearTimeout(timer)
	}, [showContent, content])
	return (
		<>
		  {showContent}
		</>
	)
}

function showAiInterpretation(
	occupation: Occupation,
	modal: HookAPI,
	typeing = true,
): void {
	modal.info({
		title: (
			<div className='flex flex-row'>
				<div className='mr-2'>{occupation.name}</div>
				<div>
					<Tag color='blue'>
						{occupation.firstAlphabet}
						{occupation.secondAlphabet}
						{occupation.thirdAlphabet}
					</Tag>
				</div>
			</div>
		),
		content: (
			<div className='text-gray-600 text-base'>
				{typeing ? (
					<ShowTyping content={occupation.description} />
				) : (
					occupation.description
				)}
			</div>
		),
		width: 600,
	})
}
