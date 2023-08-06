/*
  Warnings:

  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Todo`;

-- CreateTable
CREATE TABLE `my_Todo` (
    `to_do_id` INTEGER NOT NULL AUTO_INCREMENT,
    `contenu` VARCHAR(255) NOT NULL,
    `titre` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`to_do_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
