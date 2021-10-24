const {json} = require("micro")

const mqttUrl = "mqtt://172.19.0.1:1883"
const mqttTopic = "v1/devices/me/telemetry"

//const mqttTopic = "v1/gateway/telemetry"

const mqtt = require("mqtt")
//const client = mqtt.connect(mqttUrl)

//client.on("connect", () => console.log(`Connected to ${mqttUrl}`))

module.exports = async req => {
  if(req.method === "POST") {
    const {position, device} = await json(req);
    const data = {
      gatewayId: device.id,
      recordTime: position.deviceTime,
      timestamp: position.deviceTime,
      fixTime:  position.fixTime,
      valid: position.valid,
      latitude: position.latitude,
      longitude: position.longitude,
      location: [position.longitude, position.latitude],
      distance: position.attributes.distance,
      altitude: position.altitude,
      speed: position.speed,
      maxSpeed: position.attributes.maxSpeed,
      course: position.course,
      state: position.attributes.state,
      address: position.address,
      sat: position.attributes.sat,
      ignition: position.attributes.ignition,
      motion: position.attributes.motion,
      rssi: position.attributes.rssi,
      power: position.attributes.power,
      battery: position.attributes.battery,
      batteryLevel: position.attributes.batteryLevel,
      distance: position.attributes.distance,
      totalDistance: position.attributes.totalDistance
    }
   
    //const client = mqtt.connect(mqttUrl)
    
    //Device ID should be added as the Access Token or Device ID
    const cred = {clientId:"", username: device.uniqueId, password:""}
    const deviceclient = mqtt.connect(mqttUrl, cred)
    deviceclient.on("connect", () => console.log(`Connected to ${mqttUrl}`))  
    deviceclient.publish(mqttTopic, JSON.stringify(data))
    console.log(data)
    return "Success"
  } else {
    console.log(`Unsupported method ${req.method}`)
    return `GET method is not supported`
  }
}
