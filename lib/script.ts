import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import OpenAI from 'jsr:@openai/openai@4.98.0'
import { type Occupation, occupations } from './occupation.ts'

type OccupationWithDescription = Occupation & {
	description: string
}

const prompt = `
你的任务是根据用户输入的职业名称, 按照以下格式生成职业描述, 而不要生成其他任何内容:

我是一个<职业名称>. 我的工作内容包括<工作内容>. 为了完成我的工作, 我需要学习<所需学习内容>, 还需要具备<所需技能>. 我的职业的价值在于: <一句话描述职业的价值>.
`.trim()

if (import.meta.dirname && import.meta.main) {
	const output = resolve(import.meta.dirname, '../src/occupations.json')
	const apiKey = Deno.args[0]
	if (!apiKey) {
		console.error('Please provide an OpenAI API key as the first argument.')
		Deno.exit(1)
	}
	const exists = await readFile(output).catch(() => null)
	if (!exists) {
		console.error('Please create occupations.json file first.')
		Deno.exit(1)
	}
	const existingOccupations: OccupationWithDescription[] = JSON.parse(
		exists.toString(),
	)
	const ai = new OpenAI({
		apiKey,
		baseURL: 'https://api.deepseek.com/v1',
	})
	const occupationsList: OccupationWithDescription[] = []
	for (const occupation of occupations) {
		const existingOccupation = existingOccupations.find(
			(o) => o.uuid === occupation.uuid,
		)
		if (existingOccupation) {
			occupationsList.push(existingOccupation)
			console.log(
				`Found existing description for ${occupation.name} (${occupationsList.length}/${occupations.length})`,
			)
			continue
		}
		const response = await ai.chat.completions.create({
			model: 'deepseek-chat',
			messages: [
				{ role: 'system', content: prompt },
				{ role: 'user', content: occupation.name },
			],
		})
		const description = response.choices[0].message.content
		if (!description) {
			console.error(`No description found for ${occupation.name}`)
			Deno.exit(1)
		}
		occupationsList.push({
			...occupation,
			description,
		})
		console.log(
			`Added description for ${occupation.name} (${occupationsList.length}/${occupations.length})`,
		)
		await writeFile(output, JSON.stringify(occupationsList, null, 2))
	}
}
