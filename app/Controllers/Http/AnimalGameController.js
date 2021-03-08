'use strict'

const TensorFlow = require('@tensorflow/tfjs');
const AnimalGameRepository = use('App/Repositories/AnimalGameRepository');

class AnimalGameController {

    async getElevenResult({ response }) {

        try {

            let animalGameRepository = new AnimalGameRepository();
            let resultsByDayAsc = await animalGameRepository.getResultOrderByDayAsc()

            resultsByDayAsc = resultsByDayAsc.toJSON();

            let predict = await this.operationTensorFlow(resultsByDayAsc);

            return response.status(200).send(predict)

        } catch (e) {
            console.log(e);
            return response.status(500).send(e)
        }
    }

    async operationTensorFlow(datas) {

        let x = [];
        let y = [];
        let qtdLinhas = 0;


        for (let i = 0; i < datas.length; i++) {
            console.log(datas[i])
            let celulas1 = [];

            if (qtdLinhas == (datas.length - 1)) celulas1 = [9552];

            else celulas1 = datas[i + 1]?.resultado;

            const celulas2 = datas[i]?.resultado;

            x.push([celulas1])
            y.push([celulas2])

            qtdLinhas++;
        }

        const model = TensorFlow.sequential();
        const inputLayer = TensorFlow.layers.dense({ units: 1, inputShape: 1 })
        model.add(inputLayer);

        const learningRate = 0.000000001;
        const optimizer = TensorFlow.train.sgd(learningRate);

        model.compile({ loss: 'meanSquaredError', optimizer: optimizer });

        const X = TensorFlow.tensor(x, [qtdLinhas, 1]);
        const Y = TensorFlow.tensor(y);

        const lastResult = [[6157]]
        const lastResultTensor = TensorFlow.tensor(lastResult, [1, 1]);

        await model.fit(X, Y, { epochs: 500000 })

        let response = model.predict(lastResultTensor).dataSync();
        console.log(Number(response[0]).toFixed(0))
        return response;

    }

}

module.exports = AnimalGameController
