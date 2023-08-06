/*
  Warnings:

  - You are about to drop the `Posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Posts`;

-- DropTable
DROP TABLE `Users`;

-- CreateTable
CREATE TABLE `Todo` (
    `to_do_id` INTEGER NOT NULL AUTO_INCREMENT,
    `contenu` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`to_do_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
