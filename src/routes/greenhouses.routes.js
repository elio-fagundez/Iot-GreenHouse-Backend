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

export default router;