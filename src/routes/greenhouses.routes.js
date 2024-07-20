import {Router} from 'express';
import { PrismaClient } from '@prisma/client';


const router = Router();
const prisma = new PrismaClient();

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
        const {name, country, website, phone, cif, profileImage} = req.body;
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

export default router;