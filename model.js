const mongoose = require('mongoose');

const DateSchema= new mongoose.Schema({
    date: String,
    dateTransform: String
})

const TouristArrivalSchema= new mongoose.Schema({
    date: String,
    value: String
})

const TouristDepartureSchema= new mongoose.Schema({
    date: String,
    value: String
})

const ThaiArrivalSchema= new mongoose.Schema({
    date: String,
    value: String
})

const ThaiDepartureSchema= new mongoose.Schema({
    date: String,
    value: String
})

const ThaiDepartureStaticSchema= new mongoose.Schema({
    date: String,
    value: String
})

const ThaiArrivalStaticSchema= new mongoose.Schema({
    date: String,
    value: String
})

const TouristDepartureStaticSchema= new mongoose.Schema({
    date: String,
    value: String
})

const TouristArrivalStaticSchema= new mongoose.Schema({
    date: String,
    value: String
})

//Prediction
const DateModel = mongoose.model('date', DateSchema, 'date');
const TouristArrival = mongoose.model('tourist_arrival_predict', TouristArrivalSchema, 'tourist_arrival_predict');
const TouristDeparture = mongoose.model('tourist_departure_predict', TouristDepartureSchema, 'tourist_departure_predict');
const ThaiArrival = mongoose.model('thai_arrival_predict', ThaiArrivalSchema, 'thai_arrival_predict');
const ThaiDeparture = mongoose.model('thai_departure_predict', ThaiDepartureSchema, 'thai_departure_predict');
//Static
const TouristArrivalStatic = mongoose.model('tourist_arrival_static', TouristArrivalStaticSchema, 'foreigner_enter');
const TouristDepartureStatic = mongoose.model('tourist_departure_static', TouristDepartureStaticSchema, 'foreigner_out');
const ThaiArrivalStatic = mongoose.model('thai_arrival_static', ThaiArrivalStaticSchema, 'thai_enter');
const ThaiDepartureStatic = mongoose.model('thai_departure_static', ThaiDepartureStaticSchema, 'thai_out');

module.exports = {
    TouristArrival: TouristArrival,
    TouristDeparture: TouristDeparture,
    ThaiArrival: ThaiArrival,
    ThaiDeparture: ThaiDeparture,
    TouristArrivalStatic: TouristArrivalStatic,
    TouristDepartureStatic: TouristDepartureStatic,
    ThaiArrivalStatic: ThaiArrivalStatic,
    ThaiDepartureStatic: ThaiDepartureStatic,
    DateModel: DateModel
}
