-- CreateTable
CREATE TABLE `Temperature` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `greenhouseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Temperature` ADD CONSTRAINT `Temperature_greenhouseId_fkey` FOREIGN KEY (`greenhouseId`) REFERENCES `Greenhouse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;