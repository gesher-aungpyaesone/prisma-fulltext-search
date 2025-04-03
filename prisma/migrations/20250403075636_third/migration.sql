-- CreateIndex
CREATE FULLTEXT INDEX `Article_title_description_body_idx` ON `Article`(`title`, `description`, `body`);
