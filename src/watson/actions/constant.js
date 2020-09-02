exports.LOCATION_TRY_AGAIN_MESSAGE = (
    [{
        "title": "No hemos encontrado resultado, elige una de las siguientes opciones para ubicar nuestras agencias",
        "options": [
            {
                "label": "Calle",
                "value": {
                    "input": {
                        "text": "Ubicar agencias por calle"
                    }
                }
            },
            {
                "label": "Municipio",
                "value": {
                    "input": {
                        "text": "Ubicar agencias por municipio"
                    }
                }
            },
            {
                "label": "Zona",
                "value": {
                    "input": {
                        "text": "Ubicar agencias por zona"
                    }
                }
            },
        ],
        "response_type": "option",
        "response_index": 0
    }]
)

exports.LOCATION_NOT_FOUND = (
    [
        {
            "text": "Lo lamento no hemos encontrado ninguna agencia cerca.",
            "response_type": "text",
            "response_index": 0
        },
        { 
            "time": "10000", 
            "typing": "true",
            "response_type": 'pause'
        }
    ]
)

exports.LOCATION_SOMETHING_ELSE = (
    { time: 10000, typing: true, response_type: 'pause' }
)