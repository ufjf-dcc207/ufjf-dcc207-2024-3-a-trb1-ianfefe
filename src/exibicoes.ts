export type FilmesTuplaType = [
    string,
    string,
    number,
    number,
    string[],
    string
];

type ExibicaoTuplaType = [
    string,
    FilmesTuplaType[]
]

const EXIBICAO: ExibicaoTuplaType[] =
    [
        ["Animacao",
            [['Moana', '', 10, 18, ["comedia", "terror"], ""],
            ['Mickey', '', 10, 18, [], ""],
            ['Enrolados', '', 10, 18, [], ""]]
        ],
        ["Terror",
            [['It', '', 10, 18, [], ""],
            ['A Freira', '', 10, 18, [], ""]
            ]
        ]
    ];

export default EXIBICAO;