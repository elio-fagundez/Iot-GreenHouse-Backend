import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Endpoints para Greenhouse
router.get('/greenhouses', async (req, res) => {
    try {
        const greenhouses = await prisma.greenhouse.findMany();
        res.json(greenhouses);
    } catch (error) {
        console.error("Error fetching greenhouses:", error);
        res.status(500).send("Error fetching greenhouses");
    }
});

router.get('/greenhouses/:id', async (req, res) => {
    try {
        const productFound = await prisma.greenhouse.findFirst({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(productFound);
    } catch (error) {
        console.error("Error fetching greenhouses:", error);
        res.status(500).send("Error fetching greenhouses");
    }
});

router.post('/greenhouses', async (req, res) => {
    try {
        const { name, country, website, phone, cif, profileImage } = req.body;
        const newGreenhouse = await prisma.greenhouse.create({
            data: {
                name,
                country,
                website,
                phone,
                cif,
                profileImage
            }
        });
        res.json(newGreenhouse);
    } catch (error) {
        console.error("Error creating a new greenhouse:", error);
        res.status(500).send("Error creating a new greenhouse");
    }
});

router.delete('/greenhouses/:id', async (req, res) => {
    try {
        const deletedProduct = await prisma.greenhouse.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(deletedProduct);
    } catch (error) {
        console.error("Error fetching greenhouses:", error);
        res.status(500).send("Error fetching greenhouses");
    }
});

router.put('/greenhouses/:id', async (req, res) => {
    try {
        const productUpdate = await prisma.greenhouse.update({
            where: {
                id: parseInt(req.params.id)
            }
        });
        return res.json(productUpdate);
    } catch (error) {
        console.error("Error fetching greenhouses:", error);
        res.status(500).send("Error fetching greenhouses");
    }
});

// Endpoints to Temperature
router.get('/temperatures', async (req, res) => {
    try {
        const temperatures = await prisma.temperature.findMany();
        res.json(temperatures);
    } catch (error) {
        console.error("Error fetching temperatures:", error);
        res.status(500).send("Error fetching temperatures");
    }
});

router.post('/temperatures', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        await prisma.temperature.create({
            data: {
                value,
                greenhouseId
            }
        });


        res.json("Temperature  created");

    } catch (error) {
        console.error("Error creating a new temperature:", error);
        res.status(500).send("Error creating a new temperature");
    }
});

router.put('/temperatures/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedTemperature = await prisma.temperature.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedTemperature);
    } catch (error) {
        console.error("Error updating temperature:", error);
        res.status(500).send("Error updating temperature");
    }
});

router.delete('/temperatures/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.temperature.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting temperature:", error);
        res.status(500).send("Error deleting temperature");
    }
});

// Endpoints to Humidity
router.get('/humidities', async (req, res) => {
    try {
        const humidities = await prisma.humidity.findMany();
        res.json(humidities);
    } catch (error) {
        console.error("Error fetching humidities:", error);
        res.status(500).send("Error fetching humidities");
    }
});

router.post('/humidities', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newHumidity = await prisma.humidity.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newHumidity);
    } catch (error) {
        console.error("Error creating a new humidity:", error);
        res.status(500).send("Error creating a new humidity");
    }
});

router.put('/humidities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedHumidity = await prisma.humidity.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedHumidity);
    } catch (error) {
        console.error("Error updating humidity:", error);
        res.status(500).send("Error updating humidity");
    }
});

router.delete('/humidities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.humidity.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting humidity:", error);
        res.status(500).send("Error deleting humidity");
    }
});

// Endpoints to Brightness
router.get('/brightnesses', async (req, res) => {
    try {
        const brightnesses = await prisma.brightness.findMany();
        res.json(brightnesses);
    } catch (error) {
        console.error("Error fetching brightnesses:", error);
        res.status(500).send("Error fetching brightnesses");
    }
});

router.post('/brightnesses', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newBrightness = await prisma.brightness.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newBrightness);
    } catch (error) {
        console.error("Error creating a new brightness:", error);
        res.status(500).send("Error creating a new brightness");
    }
});

router.put('/brightnesses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedBrightness = await prisma.brightness.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedBrightness);
    } catch (error) {
        console.error("Error updating brightness:", error);
        res.status(500).send("Error updating brightness");
    }
});

router.delete('/brightnesses/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.brightness.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting brightness:", error);
        res.status(500).send("Error deleting brightness");
    }
});

// Endpoints para SoilHumidity
router.get('/soilhumidities', async (req, res) => {
    try {
        const soilhumidities = await prisma.soilHumidity.findMany();
        res.json(soilhumidities);
    } catch (error) {
        console.error("Error fetching soil humidities:", error);
        res.status(500).send("Error fetching soil humidities");
    }
});

router.post('/soilhumidities', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newSoilHumidity = await prisma.soilHumidity.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newSoilHumidity);
    } catch (error) {
        console.error("Error creating a new soil humidity:", error);
        res.status(500).send("Error creating a new soil humidity");
    }
});

router.put('/soilhumidities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedSoilHumidity = await prisma.soilHumidity.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedSoilHumidity);
    } catch (error) {
        console.error("Error updating soil humidity:", error);
        res.status(500).send("Error updating soil humidity");
    }
});

router.delete('/soilhumidities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.soilHumidity.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting soil humidity:", error);
        res.status(500).send("Error deleting soil humidity");
    }
});


// Endpoints para CO2
router.get('/co2', async (req, res) => {
    try {
        const co2Levels = await prisma.co2.findMany();
        res.json(co2Levels);
    } catch (error) {
        console.error("Error fetching CO2 levels:", error);
        res.status(500).send("Error fetching CO2 levels");
    }
});

router.post('/co2', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newCO2 = await prisma.co2.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newCO2);
    } catch (error) {
        console.error("Error creating a new CO2 level:", error);
        res.status(500).send("Error creating a new CO2 level");
    }
});

router.put('/co2/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedCO2 = await prisma.co2.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedCO2);
    } catch (error) {
        console.error("Error updating CO2 level:", error);
        res.status(500).send("Error updating CO2 level");
    }
});

router.delete('/co2/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.co2.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting CO2 level:", error);
        res.status(500).send("Error deleting CO2 level");
    }
});

// Endpoints para Fan1
router.get('/fan1', async (req, res) => {
    try {
        const fan1Levels = await prisma.fan1.findMany();
        res.json(fan1Levels);
    } catch (error) {
        console.error("Error fetching Fan1 levels:", error);
        res.status(500).send("Error fetching Fan1 levels");
    }
});

router.post('/fan1', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newFan1 = await prisma.fan1.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newFan1);
    } catch (error) {
        console.error("Error creating a new Fan1 level:", error);
        res.status(500).send("Error creating a new Fan1 level");
    }
});

router.put('/fan1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedFan1 = await prisma.fan1.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedFan1);
    } catch (error) {
        console.error("Error updating Fan1 level:", error);
        res.status(500).send("Error updating Fan1 level");
    }
});

router.delete('/fan1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.fan1.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting Fan1 level:", error);
        res.status(500).send("Error deleting Fan1 level");
    }
});


// Endpoints para Lamp 1
router.get('/lamp1', async (req, res) => {
    try {
        const lamp1Levels = await prisma.lamp1.findMany();
        res.json(lamp1Levels);
    } catch (error) {
        console.error("Error fetching Lamp1 levels:", error);
        res.status(500).send("Error fetching Lamp1 levels");
    }
});

router.post('/lamp1', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newLamp1 = await prisma.lamp1.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newLamp1);
    } catch (error) {
        console.error("Error creating a new Lamp1 level:", error);
        res.status(500).send("Error creating a new Lamp1 level");
    }
});

router.put('/lamp1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedLamp1 = await prisma.lamp1.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedLamp1);
    } catch (error) {
        console.error("Error updating Lamp1 level:", error);
        res.status(500).send("Error updating Lamp1 level");
    }
});

router.delete('/lamp1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.lamp1.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting Lamp1 level:", error);
        res.status(500).send("Error deleting Lamp1 level");
    }
});

// Endpoints para Pump 1
router.get('/pump1', async (req, res) => {
    try {
        const pump1Levels = await prisma.pump1.findMany();
        res.json(pump1Levels);
    } catch (error) {
        console.error("Error fetching Pump1 levels:", error);
        res.status(500).send("Error fetching Pump1 levels");
    }
});

router.post('/pump1', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newPump1 = await prisma.pump1.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newPump1);
    } catch (error) {
        console.error("Error creating a new Pump1 level:", error);
        res.status(500).send("Error creating a new Pump1 level");
    }
});

router.put('/pump1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedPump1 = await prisma.pump1.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedPump1);
    } catch (error) {
        console.error("Error updating Pump1 level:", error);
        res.status(500).send("Error updating Pump1 level");
    }
});

router.delete('/pump1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.pump1.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting Pump1 level:", error);
        res.status(500).send("Error deleting Pump1 level");
    }
});

// Endpoints para Heater 1
router.get('/heater1', async (req, res) => {
    try {
        const heater1Levels = await prisma.heater1.findMany();
        res.json(heater1Levels);
    } catch (error) {
        console.error("Error fetching Heater1 levels:", error);
        res.status(500).send("Error fetching Heater1 levels");
    }
});

router.post('/heater1', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newHeater1 = await prisma.heater1.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newHeater1);
    } catch (error) {
        console.error("Error creating a new Heater1 level:", error);
        res.status(500).send("Error creating a new Heater1 level");
    }
});

router.put('/heater1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedHeater1 = await prisma.heater1.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedHeater1);
    } catch (error) {
        console.error("Error updating Heater1 level:", error);
        res.status(500).send("Error updating Heater1 level");
    }
});

router.delete('/heater1/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.heater1.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting Heater1 level:", error);
        res.status(500).send("Error deleting Heater1 level");
    }
});

// Endpoints para ph
router.get('/ph', async (req, res) => {
    try {
        const phLevels = await prisma.ph.findMany();
        res.json(phLevels);
    } catch (error) {
        console.error("Error fetching ph levels:", error);
        res.status(500).send("Error fetching ph levels");
    }
});

router.post('/ph', async (req, res) => {
    try {
        const { value, greenhouseId } = req.body;
        const newPh = await prisma.ph.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newPh);
    } catch (error) {
        console.error("Error creating a new ph level:", error);
        res.status(500).send("Error creating a new ph level");
    }
});

router.put('/ph/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { value, greenhouseId } = req.body;
        const updatedPh = await prisma.ph.update({
            where: { id: parseInt(id) },
            data: {
                value,
                greenhouseId
            }
        });
        res.json(updatedPh);
    } catch (error) {
        console.error("Error updating ph level:", error);
        res.status(500).send("Error updating ph level");
    }
});

router.delete('/ph/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.ph.delete({
            where: { id: parseInt(id) }
        });
        res.sendStatus(204);
    } catch (error) {
        console.error("Error deleting ph level:", error);
        res.status(500).send("Error deleting ph level");
    }
});


//SENSORS
router.post('/sensors', async (req, res) => {
    const { temp, hum, lum, moi } = req.body; 
    const greenhouseId  = 1; //default greenhouse  

    try {
        //temperature
        try {
            await prisma.temperature.create({
                data: {
                    value: temp,
                    greenhouseId
                }
            });
        } catch (error) {
            console.error("Error creating temperature:", error);
        }
        
        //humidity
        try {
            await prisma.humidity.create({
                data: {
                    value: hum,
                    greenhouseId
                }
            });
        } catch (error) {
            console.error("Error creating humidity:", error);
        }

        //luminosity
        try {
            await prisma.luminosity.create({
                data: {
                    value: lum,
                    greenhouseId
                }
            });
        } catch (error) {
            console.error("Error creating luminosity:", error);
        }

        //moi
        try {
            await prisma.moi.create({
                data: {
                    value: moi,
                    greenhouseId
                }
            });
        } catch (error) {
            console.error("Error creating moi:", error);
        }

        res.json("Sensors created");

    } catch (error) {
        res.status(500).send("Error creating sensors");
    }
});



export default router;