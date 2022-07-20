export const initialCourses = [[
	{
		id: '28',
		credits: 4,
		cicle: '1',
		requiredCourses: [

		],
		text: "Social Humanística 1",
	},
	{
		id: '169',
		credits: 7,
		cicle: '1',
		requiredCourses: [

		],
		text: "Matemática básica 1",
	},
	{
		id: '2666',
		credits: 1,
		cicle: '1',
		requiredCourses: [

		],
		text: "Orientación y liderazgo",
	},
	{
		id: '177',
		credits: 1,
		cicle: '1',
		requiredCourses: [

		],
		text: "Deportes 1",
	},
	{
		id: '216',
		credits: 3,
		cicle: '1',
		requiredCourses: [

		],
		text: "Química 1",
	},
], [
	{
		id: '29',
		credits: 4,
		cicle: '2',
		requiredCourses: [
			"28"
		],
		text: "Social humanística 2",
	},
	{
		id: '170',
		credits: 7,
		cicle: '2',
		requiredCourses: [
			"169"
		],
		text: "Matemática básica 2",
	},
	{
		id: '2667',
		credits: 3,
		cicle: '1',
		requiredCourses: [

		],
		text: "Técnicas de investigación y estudio",
	},
	{
		id: '72',
		credits: 5,
		cicle: '1',
		requiredCourses: [
			"169"
		],
		text: "Física básica",
	},

],
[
	{
		id: '2797',
		credits: 2,
		cicle: '3',
		requiredCourses: [
			"170"
		],
		creditsRequired: '33cr',
		text: "Lógica de sistemas",
	},
	{
		id: '2795',
		credits: 5,
		cicle: '3',
		requiredCourses: [
			"170"
		],
		creditsRequired: '33cr',
		text: "Mate computo 1",
	},
	{
		id: '2796',
		credits: 4,
		cicle: '3',
		requiredCourses: [
			"170"
		],
		creditsRequired: '33cr',
		text: "Intr. a la programación y computación",
	},
	{
		id: '290',
		credits: 10,
		cicle: '3',
		requiredCourses: [
			"170"
		],
		text: "Matemática intermedia 1",
	},
	{
		id: '146',
		credits: 6,
		cicle: '3',
		requiredCourses: [
			"170",
			"72"
		],
		text: "Física 1",
	},
],
[
	{
		id: '949',
		credits: 5,
		cicle: '4',
		requiredCourses: [
			"290",
			"2667"
		],
		text: "Estadística 1",
	},
	{
		id: '2798',
		credits: 3,
		cicle: '4',
		requiredCourses: [
			"2795",
			"2796",
			"2797"
		],
		text: "Lenguajes formales y de programación",
	},
	{
		id: '2799',
		credits: 5,
		cicle: '4',
		requiredCourses: [
			"2795",
			"2796",
			"2797"
		],
		text: "Mate computo 2",
	},
	{
		id: '2800',
		credits: 5,
		cicle: '4',
		requiredCourses: [
			"2795",
			"2796",
			"2797",
			"290"
		],
		text: "Intr. a la prog. y computación 2",
	},
	{
		id: '291',
		credits: 5,
		cicle: '4',
		requiredCourses: [
			"290"
		],
		text: "Matemática intermedia 2",
	},
	{
		id: '292',
		credits: 5,
		cicle: '4',
		requiredCourses: [
			"290"
		],
		text: "Matemática intermedia 3",
	},
	{
		id: '147',
		credits: 6,
		cicle: '4',
		requiredCourses: [
			"290",
			"146"
		],
		text: "Física 2",
	},
], [
	{
		id: '2802',
		credits: 4,
		cicle: '5',
		requiredCourses: [
			"949"
		],
		text: "Análisis probabilístico",
	},
	{
		id: '2803',
		credits: 4,
		cicle: '5',
		requiredCourses: [
			"2798",
			"2799",
			"2800",
		],
		text: "Org. Lenguajes y compiladores 1",
	},
	{
		id: '2804',
		credits: 3,
		cicle: '5',
		requiredCourses: [
			"147",
			"2799",
			"2800",
		],
		text: "Organización computaciónal",
	},
	{
		id: '2805',
		credits: 5,
		cicle: '5',
		requiredCourses: [
			"2798",
			"2799",
			"2800",
		],
		text: "Estructura de datos",
	},
	{
		id: '674',
		credits: 5,
		cicle: '5',
		requiredCourses: [
			"291",
			"292",
		],
		text: "Matemática aplicada 3",
	},
	{
		id: '673',
		credits: 6,
		cicle: '5',
		requiredCourses: [
			"291",
			"292",
		],
		text: "Matemática aplicada 1",
	},
	{
		id: '2807',
		credits: 0,
		cicle: '5',
		requiredCourses: [
			"170",
			"2796",
		],
		text: "Práctica inicial TI",
	},
],
[
	{
		id: '2808',
		credits: 5,
		cicle: '6',
		requiredCourses: [
			"249",
			"674",
			"673",
			"2805",
		],
		text: "Teoría de sistemas 1",
	},
	{
		id: '685',
		credits: 5,
		cicle: '6',
		requiredCourses: [
			"949",
			"2800",
		],
		text: "Investigaciòn de operaciones",
	},
	{
		id: '2809',
		credits: 4,
		cicle: '6',
		requiredCourses: [
			"949",
		],
		text: "Economìa",
	},
	{
		id: '2810',
		credits: 5,
		cicle: '6',
		requiredCourses: [
			"2803",
			"2805",
		],
		text: "Org. Lenguajes y compiladores 2",
	},
	{
		id: '2811',
		credits: 5,
		cicle: '6',
		requiredCourses: [
			"2803",
			"2805",
		],
		text: "Arq. Compu y ensambladores",
	},
	{
		id: '2812',
		credits: 4,
		cicle: '6',
		requiredCourses: [
			"2798",
			"2803",
		],
		text: "Manejo e implementaciòn de archivos",
	},

], [
	{
		id: '2813',
		credits: 5,
		cicle: '7',
		requiredCourses: [
			"685",
			"2802",
			"2808",
		],
		text: "Teoría de sistemas 2",
	},
	{
		id: '795',
		credits: 5,
		cicle: '7',
		requiredCourses: [
			"685"
		],
		text: "Investigacion de operaciones 2",
	},
	{
		id: '2814',
		credits: 5,
		cicle: '7',
		requiredCourses: [
			"2800",
			"2811"
		],
		text: "Sistemas operativos 1",
	},
	{
		id: '2815',
		credits: 4,
		cicle: '7',
		requiredCourses: [
			"2811"
		],
		text: "Arq. Compu y ensambladores 2",
	},
	{
		id: '2816',
		credits: 4,
		cicle: '7',
		requiredCourses: [
			"2811",
			"2812",
		],
		text: "Redes de computadoras 1",
	},
	{
		id: '2817',
		credits: 5,
		cicle: '7',
		requiredCourses: [
			"2803",
			"2807",
			"2811",
			"2812",
		],
		text: "Sistemas de bases de datos 1",
	},
	{
		id: '2818',
		credits: 0,
		cicle: '7',
		requiredCourses: [
			"2803",
			"2807",
			"2811",
			"2812",
		],
		text: "Práctica intermedia TI",
	},

],
[
	{
		id: '2819',
		credits: 4,
		cicle: '8',
		requiredCourses: [
			"2814",
		],
		text: "Sistemas operativos 2",
	},
	{
		id: '2820',
		credits: 4,
		cicle: '8',
		requiredCourses: [
			"2816",
		],
		text: "Redes de computadoras 2",
	},
	{
		id: '2821',
		credits: 4,
		cicle: '8',
		requiredCourses: [
			"2814",
			"2817",
		],
		text: "Sistemas de base de datos 2",
	},
	{
		id: '2822',
		credits: 5,
		cicle: '8',
		requiredCourses: [
			"2817",
		],
		text: "Análisis y diseño de sistemas 1",
	},
	{
		id: '2823',
		credits: 3,
		cicle: '8',
		requiredCourses: [
			"2813",
		],
		creditsRequired: '170cr',
		text: "Seminario de sistemas 1",
	},

],
[
	{
		id: '2824',
		credits: 5,
		cicle: '9',
		requiredCourses: [
			"795",
			"2813",
		],
		text: "Modelación y simulación 1 ",
	},
	{
		id: '2825',
		credits: 4,
		cicle: '9',
		requiredCourses: [
			"2813",
			"2822",
		],
		text: "Sistemas organizacionales y gerenciales 1",
	},
	{
		id: '2826',
		credits: 4,
		cicle: '9',
		requiredCourses: [
			"2810",
			"2813",
			"2821",
		],
		text: "Inteligencia artificial 1 ",
	},
	{
		id: '2827',
		credits: 3,
		cicle: '9',
		requiredCourses: [
			"2822",
		],
		text: "Análisis y diseño de sistemas 2",
	},
	{
		id: '2828',
		credits: 3,
		cicle: '9',
		requiredCourses: [
			"2823",
		],
		creditsRequired: '190cr',
		text: "Seminario de sistemas 2",
	},
	{
		id: '2829',
		credits: 0,
		cicle: '9',
		requiredCourses: [
			"2818",
		],
		creditsRequired: '200cr',
		text: "Práctica final",
	},

],
[
	{
		id: '2834',
		credits: 4,
		cicle: '10',
		requiredCourses: [
			"2825",
		],
		text: "Sistemas organizacionales y gerenciales 2",
	},
	{
		id: '2835',
		credits: 5,
		cicle: '10',
		requiredCourses: [
			"2824",
		],
		text: "Modelación y simulación 2",
	},
	{
		id: '2836',
		credits: 6,
		cicle: '10',
		requiredCourses: [
			"2827",
		],
		text: "Software avanzado",
	},
	{
		id: '2837',
		credits: 3,
		cicle: '10',
		requiredCourses: [
			"2828",
		],
		creditsRequired: '220cr',
		text: "Seminario de investigación",
	},

]
];