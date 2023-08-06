/*
  Warnings:

  - Added the required column `titre` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Todo` ADD COLUMN `titre` VARCHAR(255) NOT NULL;
