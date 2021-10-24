# What is Mqttgatewaytraccar
  

Mqttgatewaytraccar is a small Server written in NodeJs to use Traccar in other Programs. Written for PulseNetAI
 

Mqttgatewaytraccar uses a number of open source projects to work properly:
  

*  [MQTT](https://www.npmjs.com/package/mqtt) - Node.JS client library for the MQTT protocol
*  [Micro](https://www.npmjs.com/package/micro) - Micro — Asynchronous HTTP microservices

# Setup and Starting via npm

```sh
npm install
npm start
```

# Setup and Starting via Docker-compose
##### !!! Dont forget Setup the var.env file for your environment !!!
```sh
nano docker-compose.yml
docker-compose up
```
 Try docker-compose up -d to start in background.


## Setup Traccar

On your Traccar Setup edit **conf/traccar.xml** and add forward

``` xml

<!-- position forwarding -->

<entry  key='forward.enable'>true</entry>
<entry  key='forward.json'>true</entry>
<entry  key='forward.url'>http://mqttgatewaytraccar_ip:8759/</entry>

```

**And restart Traccar Instance**

## Change Access Token to Id of Tracking Device

![deviceidasaccesstoken](https://user-images.githubusercontent.com/43235624/138587119-71a02117-de51-42b3-88c9-a8439b568444.png)

## Sample Telemetry

![telemetrydata](https://user-images.githubusercontent.com/43235624/138587162-71e47010-d32a-45dd-8c83-62a3a3a8969f.png)





