export type Occupation = {
	name: string
	uuid: string
	firstAlphabet: string
	secondAlphabet: string
	thirdAlphabet: string
}

function uuid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0
		const v = c === 'x' ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}

export const occupations: Occupation[] = [
	{
		name: '建筑设计员',
		firstAlphabet: 'R',
		secondAlphabet: 'I',
		thirdAlphabet: 'A',
	},
	{ name: '厨师', firstAlphabet: 'R', secondAlphabet: 'I', thirdAlphabet: 'S' },
	{
		name: '林务员',
		firstAlphabet: 'R',
		secondAlphabet: 'I',
		thirdAlphabet: 'S',
	},
	{
		name: '桥梁工程师',
		firstAlphabet: 'R',
		secondAlphabet: 'I',
		thirdAlphabet: 'E',
	},
	{
		name: '航空工程师',
		firstAlphabet: 'R',
		secondAlphabet: 'I',
		thirdAlphabet: 'E',
	},
	{
		name: '航海船员',
		firstAlphabet: 'R',
		secondAlphabet: 'I',
		thirdAlphabet: 'C',
	},
	{
		name: '托儿所所长',
		firstAlphabet: 'R',
		secondAlphabet: 'I',
		thirdAlphabet: 'C',
	},
	{
		name: '手工雕刻师',
		firstAlphabet: 'R',
		secondAlphabet: 'A',
		thirdAlphabet: 'I',
	},
	{
		name: '家具木工',
		firstAlphabet: 'R',
		secondAlphabet: 'A',
		thirdAlphabet: 'I',
	},
	{
		name: '消防员',
		firstAlphabet: 'R',
		secondAlphabet: 'S',
		thirdAlphabet: 'E',
	},
	{ name: '警察', firstAlphabet: 'R', secondAlphabet: 'S', thirdAlphabet: 'E' },
	{
		name: '理发师',
		firstAlphabet: 'R',
		secondAlphabet: 'S',
		thirdAlphabet: 'E',
	},
	{
		name: '纺织工',
		firstAlphabet: 'R',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '实验室动物饲养员',
		firstAlphabet: 'R',
		secondAlphabet: 'E',
		thirdAlphabet: 'C',
	},
	{
		name: '动物管理员',
		firstAlphabet: 'R',
		secondAlphabet: 'E',
		thirdAlphabet: 'C',
	},
	{
		name: '轮船船长',
		firstAlphabet: 'R',
		secondAlphabet: 'E',
		thirdAlphabet: 'I',
	},
	{
		name: '航海领航员',
		firstAlphabet: 'R',
		secondAlphabet: 'E',
		thirdAlphabet: 'I',
	},
	{
		name: '旅馆服务员',
		firstAlphabet: 'R',
		secondAlphabet: 'E',
		thirdAlphabet: 'S',
	},
	{ name: '渔民', firstAlphabet: 'R', secondAlphabet: 'E', thirdAlphabet: 'S' },
	{
		name: '测量/勘测员',
		firstAlphabet: 'R',
		secondAlphabet: 'C',
		thirdAlphabet: 'I',
	},
	{
		name: '石油工程技师',
		firstAlphabet: 'R',
		secondAlphabet: 'C',
		thirdAlphabet: 'I',
	},
	{
		name: '爆破手',
		firstAlphabet: 'R',
		secondAlphabet: 'C',
		thirdAlphabet: 'S',
	},
	{
		name: '邮递员',
		firstAlphabet: 'R',
		secondAlphabet: 'C',
		thirdAlphabet: 'S',
	},
	{
		name: '吊车驾驶员',
		firstAlphabet: 'R',
		secondAlphabet: 'C',
		thirdAlphabet: 'E',
	},
	{
		name: '经济学家',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'S',
	},
	{
		name: '工程心理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'S',
	},
	{
		name: '内科医生',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'S',
	},
	{
		name: '数学家',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'S',
	},
	{
		name: '人类学家',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'R',
	},
	{
		name: '天文学家',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'R',
	},
	{
		name: '化学家',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'R',
	},
	{
		name: '物理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'A',
		thirdAlphabet: 'R',
	},
	{
		name: '营养学家',
		firstAlphabet: 'I',
		secondAlphabet: 'S',
		thirdAlphabet: 'E',
	},
	{ name: '法医', firstAlphabet: 'I', secondAlphabet: 'S', thirdAlphabet: 'C' },
	{
		name: '水生生物学者',
		firstAlphabet: 'I',
		secondAlphabet: 'S',
		thirdAlphabet: 'R',
	},
	{
		name: '微生物学家',
		firstAlphabet: 'I',
		secondAlphabet: 'S',
		thirdAlphabet: 'R',
	},
	{
		name: '牙科医生',
		firstAlphabet: 'I',
		secondAlphabet: 'S',
		thirdAlphabet: 'R',
	},
	{
		name: '教育心理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'S',
		thirdAlphabet: 'A',
	},
	{
		name: '社会心理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'S',
		thirdAlphabet: 'A',
	},
	{
		name: '临床心理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'S',
		thirdAlphabet: 'A',
	},
	{ name: '护士', firstAlphabet: 'I', secondAlphabet: 'S', thirdAlphabet: 'A' },
	{
		name: '细菌学家',
		firstAlphabet: 'I',
		secondAlphabet: 'E',
		thirdAlphabet: 'S',
	},
	{
		name: '地质学家',
		firstAlphabet: 'I',
		secondAlphabet: 'E',
		thirdAlphabet: 'S',
	},
	{
		name: '档案保管员',
		firstAlphabet: 'I',
		secondAlphabet: 'E',
		thirdAlphabet: 'C',
	},
	{
		name: '质量检验技术员',
		firstAlphabet: 'I',
		secondAlphabet: 'C',
		thirdAlphabet: 'R',
	},
	{ name: '法官', firstAlphabet: 'I', secondAlphabet: 'C', thirdAlphabet: 'R' },
	{
		name: '地理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'A',
	},
	{
		name: '气象学家',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'A',
	},
	{
		name: '原子和分子物理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'A',
	},
	{
		name: '流体物理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'S',
	},
	{
		name: '物理海洋学家',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'S',
	},
	{
		name: '等离子体物理学家',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'S',
	},
	{
		name: '化验员',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'E',
	},
	{
		name: '电气工程师',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'E',
	},
	{
		name: '土木工程师',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'E',
	},
	{
		name: '行政官员',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'E',
	},
	{
		name: '飞行员',
		firstAlphabet: 'I',
		secondAlphabet: 'R',
		thirdAlphabet: 'C',
	},
	{ name: '会计', firstAlphabet: 'C', secondAlphabet: 'R', thirdAlphabet: 'I' },
	{
		name: '仓库保管员',
		firstAlphabet: 'C',
		secondAlphabet: 'R',
		thirdAlphabet: 'S',
	},
	{
		name: '缝纫机操作工',
		firstAlphabet: 'C',
		secondAlphabet: 'R',
		thirdAlphabet: 'E',
	},
	{
		name: '会计师',
		firstAlphabet: 'C',
		secondAlphabet: 'I',
		thirdAlphabet: 'S',
	},
	{
		name: '外贸检查员',
		firstAlphabet: 'C',
		secondAlphabet: 'I',
		thirdAlphabet: 'S',
	},
	{
		name: '接待员',
		firstAlphabet: 'C',
		secondAlphabet: 'S',
		thirdAlphabet: 'E',
	},
	{
		name: '运货代理商',
		firstAlphabet: 'C',
		secondAlphabet: 'S',
		thirdAlphabet: 'R',
	},
	{ name: '秘书', firstAlphabet: 'C', secondAlphabet: 'S', thirdAlphabet: 'A' },
	{
		name: '图书管理员',
		firstAlphabet: 'C',
		secondAlphabet: 'S',
		thirdAlphabet: 'A',
	},
	{
		name: '邮递员',
		firstAlphabet: 'C',
		secondAlphabet: 'E',
		thirdAlphabet: 'R',
	},
	{
		name: '推销员',
		firstAlphabet: 'C',
		secondAlphabet: 'E',
		thirdAlphabet: 'I',
	},
	{
		name: '银行会计',
		firstAlphabet: 'C',
		secondAlphabet: 'E',
		thirdAlphabet: 'S',
	},
	{
		name: '银行行长',
		firstAlphabet: 'E',
		secondAlphabet: 'C',
		thirdAlphabet: 'I',
	},
	{
		name: '地产管理员',
		firstAlphabet: 'E',
		secondAlphabet: 'C',
		thirdAlphabet: 'I',
	},
	{
		name: '售货员',
		firstAlphabet: 'E',
		secondAlphabet: 'C',
		thirdAlphabet: 'S',
	},
	{
		name: '护士长',
		firstAlphabet: 'E',
		secondAlphabet: 'R',
		thirdAlphabet: 'I',
	},
	{
		name: '仓库管理员',
		firstAlphabet: 'E',
		secondAlphabet: 'R',
		thirdAlphabet: 'S',
	},
	{
		name: '邮政局长',
		firstAlphabet: 'E',
		secondAlphabet: 'R',
		thirdAlphabet: 'C',
	},
	{
		name: '渔船船长',
		firstAlphabet: 'E',
		secondAlphabet: 'R',
		thirdAlphabet: 'C',
	},
	{
		name: '科学刊物出版社编辑',
		firstAlphabet: 'E',
		secondAlphabet: 'I',
		thirdAlphabet: 'R',
	},
	{
		name: '专利代理人',
		firstAlphabet: 'E',
		secondAlphabet: 'I',
		thirdAlphabet: 'C',
	},
	{ name: '警官', firstAlphabet: 'E', secondAlphabet: 'I', thirdAlphabet: 'S' },
	{ name: '法官', firstAlphabet: 'E', secondAlphabet: 'A', thirdAlphabet: 'S' },
	{ name: '律师', firstAlphabet: 'E', secondAlphabet: 'A', thirdAlphabet: 'S' },
	{
		name: '播音员',
		firstAlphabet: 'E',
		secondAlphabet: 'A',
		thirdAlphabet: 'R',
	},
	{
		name: '训兽员',
		firstAlphabet: 'E',
		secondAlphabet: 'A',
		thirdAlphabet: 'R',
	},
	{
		name: '理发师',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'C',
	},
	{
		name: '体育裁判员',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'C',
	},
	{
		name: '书店售货员',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'R',
	},
	{
		name: '公共汽车驾驶员',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'R',
	},
	{
		name: '博物馆管理员',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '图书馆管理员',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '饮食业经理',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '博物馆馆长',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'A',
	},
	{
		name: '报刊管理员',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'A',
	},
	{
		name: '音乐器材售货员',
		firstAlphabet: 'E',
		secondAlphabet: 'S',
		thirdAlphabet: 'A',
	},
	{
		name: '戏剧导演',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'E',
	},
	{
		name: '舞蹈教师',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'E',
	},
	{
		name: '广告撰稿人',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'E',
	},
	{
		name: '音乐教师',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '美术教师',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '管弦乐指挥',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '合唱队指挥',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{ name: '歌星', firstAlphabet: 'A', secondAlphabet: 'S', thirdAlphabet: 'I' },
	{
		name: '演奏家',
		firstAlphabet: 'A',
		secondAlphabet: 'S',
		thirdAlphabet: 'I',
	},
	{
		name: '新闻摄影师',
		firstAlphabet: 'A',
		secondAlphabet: 'E',
		thirdAlphabet: 'R',
	},
	{
		name: '录音指导',
		firstAlphabet: 'A',
		secondAlphabet: 'E',
		thirdAlphabet: 'R',
	},
	{
		name: '喜剧演员',
		firstAlphabet: 'A',
		secondAlphabet: 'E',
		thirdAlphabet: 'R',
	},
	{
		name: '魔术师',
		firstAlphabet: 'A',
		secondAlphabet: 'E',
		thirdAlphabet: 'R',
	},
	{
		name: '电影导演',
		firstAlphabet: 'A',
		secondAlphabet: 'E',
		thirdAlphabet: 'I',
	},
	{
		name: '流行歌手',
		firstAlphabet: 'A',
		secondAlphabet: 'E',
		thirdAlphabet: 'S',
	},
	{
		name: '舞蹈演员',
		firstAlphabet: 'A',
		secondAlphabet: 'E',
		thirdAlphabet: 'S',
	},
	{ name: '模特', firstAlphabet: 'A', secondAlphabet: 'E', thirdAlphabet: 'S' },
	{ name: '画家', firstAlphabet: 'A', secondAlphabet: 'I', thirdAlphabet: 'S' },
	{
		name: '剧作家',
		firstAlphabet: 'A',
		secondAlphabet: 'I',
		thirdAlphabet: 'S',
	},
	{
		name: '时装艺术大师',
		firstAlphabet: 'A',
		secondAlphabet: 'I',
		thirdAlphabet: 'S',
	},
	{
		name: '文学作者',
		firstAlphabet: 'A',
		secondAlphabet: 'I',
		thirdAlphabet: 'S',
	},
	{ name: '花匠', firstAlphabet: 'A', secondAlphabet: 'I', thirdAlphabet: 'E' },
	{
		name: '建筑师',
		firstAlphabet: 'A',
		secondAlphabet: 'I',
		thirdAlphabet: 'R',
	},
	{
		name: '漫画家',
		firstAlphabet: 'A',
		secondAlphabet: 'I',
		thirdAlphabet: 'R',
	},
	{
		name: '社会活动家',
		firstAlphabet: 'S',
		secondAlphabet: 'E',
		thirdAlphabet: 'C',
	},
	{
		name: '宿舍管理员',
		firstAlphabet: 'S',
		secondAlphabet: 'E',
		thirdAlphabet: 'C',
	},
	{
		name: '体育教练',
		firstAlphabet: 'S',
		secondAlphabet: 'E',
		thirdAlphabet: 'R',
	},
	{
		name: '大学校长',
		firstAlphabet: 'S',
		secondAlphabet: 'E',
		thirdAlphabet: 'I',
	},
	{
		name: '历史学家',
		firstAlphabet: 'S',
		secondAlphabet: 'E',
		thirdAlphabet: 'I',
	},
	{
		name: '宗教传教士',
		firstAlphabet: 'S',
		secondAlphabet: 'E',
		thirdAlphabet: 'A',
	},
	{
		name: '戏院经理',
		firstAlphabet: 'S',
		secondAlphabet: 'C',
		thirdAlphabet: 'E',
	},
	{
		name: '医院护工',
		firstAlphabet: 'S',
		secondAlphabet: 'R',
		thirdAlphabet: 'I',
	},
	{
		name: '体育教师',
		firstAlphabet: 'S',
		secondAlphabet: 'R',
		thirdAlphabet: 'E',
	},
	{
		name: '专业运动员',
		firstAlphabet: 'S',
		secondAlphabet: 'R',
		thirdAlphabet: 'E',
	},
	{
		name: '理发师',
		firstAlphabet: 'S',
		secondAlphabet: 'R',
		thirdAlphabet: 'C',
	},
	{
		name: '社会学家',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'A',
	},
	{
		name: '心理咨询师',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'A',
	},
	{
		name: '学校心理学家',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'A',
	},
	{
		name: '大学教育学教师',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'A',
	},
	{
		name: '营养学家',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'E',
	},
	{
		name: '海关检查员',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'E',
	},
	{
		name: '大学社会科学教师',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'C',
	},
	{
		name: '救护队工作人员',
		firstAlphabet: 'S',
		secondAlphabet: 'I',
		thirdAlphabet: 'R',
	},
].map((item) => ({ ...item, uuid: uuid() }))
