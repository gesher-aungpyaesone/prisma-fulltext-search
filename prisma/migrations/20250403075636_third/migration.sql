-- CreateIndex
CREATE FULLTEXT INDEX `Article_title_description_body_ngram_idx` ON `Article`(`title`, `description`, `body`) WITH PARSER ngram;
