-- AlterTable
ALTER TABLE `User` ADD COLUMN `inRelationship` ENUM('single', 'married', 'divorce') NOT NULL DEFAULT 'single';
