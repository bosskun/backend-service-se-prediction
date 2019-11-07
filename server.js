const express = require('express');
const app = express();
const port = 20202;
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const config = require('./config')
const model = require('./model');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(express.static('public'))

let option_2019 = {
    $or: [
        { date: 1569888000000 }, { date: 1572566400000 }, { date: 1575158400000 }
    ]
}
let option_2020 = {
    $or: [
        { date: 1577836800000 }, { date: 1580515200000 }, { date: 1583020800000 }, { date: 1585699200000 }, { date: 1588291200000 }, { date: 1590969600000 },
        { date: 1593561600000 }, { date: 1596240000000 }, { date: 1598918400000 }, { date: 1601510400000 }, { date: 1604188800000 }, { date: 1606780800000 }
    ]
}
let option_2021 = {
    $or: [
        { date: 1609459200000 }, { date: 1612137600000 }, { date: 1614556800000 }, { date: 1617235200000 }, { date: 1619827200000 }, { date: 1622505600000 },
        { date: 1625097600000 }, { date: 1627776000000 }, { date: 1630454400000 }, { date: 1633046400000 }, { date: 1635724800000 }, { date: 1638316800000 }
    ]
}
let option_2022 = {
    $or: [
        { date: 1640995200000 }, { date: 1643673600000 }, { date: 1646092800000 }, { date: 1648771200000 }, { date: 1651363200000 }, { date: 1654041600000 },
        { date: 1656633600000 }, { date: 1659312000000 }, { date: 1661990400000 }, { date: 1664582400000 }, { date: 1667260800000 }, { date: 1669852800000 }
    ]
}
let option_2023 = {
    $or: [
        { date: 1672531200000 }, { date: 1675209600000 }, { date: 1677628800000 }, { date: 1680307200000 }, { date: 1682899200000 }, { date: 1685577600000 },
        { date: 1688169600000 }, { date: 1690848000000 }, { date: 1693526400000 }, { date: 1696118400000 }, { date: 1698796800000 }, { date: 1701388800000 }
    ]
}
let option_2024 = {
    $or: [
        { date: 1704067200000 }, { date: 1706745600000 }, { date: 1709251200000 }, { date: 1711929600000 }, { date: 1714521600000 }, { date: 1717200000000 },
        { date: 1719792000000 }, { date: 1722470400000 }, { date: 1725148800000 }
    ]
}

app.get('/api', (req, res) => {
    if (req.query.q == 'month') {
        model.DateModel.find({}).select('dateTransform -_id').exec(
            (err, data) => {
                res.status(200).send({ data: data })
            }
        );
    } else if (req.query.month) {
        let month = req.query.month
        let changeMonth = new Date(month).valueOf()
        if (req.query.region == 'national') {
            model.TouristArrival.findOne({ date: changeMonth.toString() }).exec((err, arrive) => {
                model.TouristDeparture.findOne({ date: changeMonth.toString() }).exec((err, depart) => {
                    res.status(200).send({
                        status: 200,
                        data: {
                            arrival: arrive.value,
                            departure: depart.value
                        }
                    })
                })
            })
        } else if (req.query.region == 'thailand') {
            model.ThaiArrival.findOne({ date: changeMonth.toString() }).exec((err, arrive) => {
                model.ThaiDeparture.findOne({ date: changeMonth.toString() }).exec((err, depart) => {
                    res.status(200).send({
                        status: 200,
                        data: {
                            arrival: arrive.value,
                            departure: depart.value
                        }
                    })
                })
            })
        } else {
            res.status(400).send({ status: 400, message: 'bad_request' })
        }

    } else if (req.query.year) {
        if (req.query.region == 'national') {
            if (req.query.year == 2019) {
                model.TouristArrival.find(option_2019).select('-_id').exec((err, data_arrive) => {
                    model.TouristDeparture.find(option_2019).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2020) {
                model.TouristArrival.find(option_2020).select('-_id').exec((err, data_arrive) => {
                    model.TouristDeparture.find(option_2020).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2021) {
                model.TouristArrival.find(option_2021).select('-_id').exec((err, data_arrive) => {
                    model.TouristDeparture.find(option_2021).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2022) {
                model.TouristArrival.find(option_2022).select('-_id').exec((err, data_arrive) => {
                    model.TouristDeparture.find(option_2022).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2023) {
                model.TouristArrival.find(option_2023).select('-_id').exec((err, data_arrive) => {
                    model.TouristDeparture.find(option_2023).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2024) {
                model.TouristArrival.find(option_2024).select('-_id').exec((err, data_arrive) => {
                    model.TouristDeparture.find(option_2024).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            }
        } else if (req.query.region == 'thailand') {
            if (req.query.year == 2019) {
                model.ThaiArrival.find(option_2019).select('-_id').exec((err, data_arrive) => {
                    model.ThaiDeparture.find(option_2019).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2020) {
                model.ThaiArrival.find(option_2020).select('-_id').exec((err, data_arrive) => {
                    model.ThaiDeparture.find(option_2020).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2021) {
                model.ThaiArrival.find(option_2021).select('-_id').exec((err, data_arrive) => {
                    model.ThaiDeparture.find(option_2021).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2022) {
                model.ThaiArrival.find(option_2022).select('-_id').exec((err, data_arrive) => {
                    model.ThaiDeparture.find(option_2022).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2023) {
                model.ThaiArrival.find(option_2023).select('-_id').exec((err, data_arrive) => {
                    model.ThaiDeparture.find(option_2023).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            } else if (req.query.year == 2024) {
                model.ThaiArrival.find(option_2024).select('-_id').exec((err, data_arrive) => {
                    model.ThaiDeparture.find(option_2024).select('-_id').exec((err, data_depart) => {
                        res.status(200).send({
                            status: 200,
                            data: {
                                arrival: data_arrive,
                                departure: data_depart
                            }
                        })
                    })
                })
            }
            else {
                res.status(400).send({ status: 400, message: 'bad_request' })
            }
        }
    }
})

app.get('/static', (req, res) => {
    if(req.query.region == 'thailand') {
        model.ThaiArrivalStatic.find({}).select('-_id').exec((err, arrive) => {
            model.ThaiDepartureStatic.find({}).select('-_id').exec((err, depart) => {
                res.status(200).send({
                    status: 200,
                    data: {
                        arrival: arrive,
                        departure: depart
                    }
                })
            })
        })
    } else if(req.query.region == 'national') {
        model.TouristArrivalStatic.find({}).select('-_id').exec((err, arrive) => {
            model.TouristDepartureStatic.find({}).select('-_id').exec((err, depart) => {
                res.status(200).send({
                    status: 200,
                    data: {
                        arrival: arrive,
                        departure: depart
                    }
                })
            })
        })
    } else {
        res.status(400).send({ status: 400, message: 'bad_request' })
    }
})

// app.post('/data', (req, res) => {
//     res.status(200).send({ code: 200, status: "success" });
//     let rawdata = fs.readFileSync('PredictFile/Prediction2.json');
//     let arrival = JSON.parse(rawdata)
//     let array = []
//     for (let i = 0; i < Object.keys(arrival.Prediction).length; i++) {
//         let jsonTranform = { 'date': Object.keys(arrival.Prediction)[i], 'value': Object.values(arrival.Prediction)[i] }
//         array.push(jsonTranform)
//     }
//     console.log(array)
// })

app.all('*', (req, res) => {
    let path = req.originalUrl;
    let split = path.split('/');
    res.status(404).send({ code: 404, status: "not_found", message: `Page ${split[1]} Not Found` });
})

app.listen(port, () => {
    console.log(`Server Start @ ${port}`);
})