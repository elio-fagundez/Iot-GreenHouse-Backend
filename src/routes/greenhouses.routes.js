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
        const newTemperature = await prisma.temperature.create({
            data: {
                value,
                greenhouseId
            }
        });
        res.json(newTemperature);
    } catch (error) {
        console.error("Error creating a new temperature:", error);
        res.status(500).send("Error creating a new temperature");
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


// Endpoints para Lamp 1
router.get('/lamp1', async (req, res) => {
    try {
        const lamp1Levels = await prisma.lamp1.findMany();
        res.json(lamp1Levels);
    } catch (error) {
        console.error("Error fetching Fan1 levels:", error);
        res.status(500).send("Error fetching Fan1 levels");
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
        console.error("Error creating a new Fan1 level:", error);
        res.status(500).send("Error creating a new Fan1 level");
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



export default router;