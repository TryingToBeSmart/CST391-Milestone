export const allMediaQueries = {
	readAllMedia:
		`SELECT * FROM streamingguide.allmedia;`,
	readAllMediaByType:
		`SELECT * FROM streamingguide.allmedia
	   WHERE streamingguide.allmedia.type = ?;`,
	readAllMediaByTypeSearch:
		`SELECT * FROM streamingguide.allmedia
	   WHERE streamingguide.allmedia.type LIKE ?;`,
	readAllMediaByTitleSearch:
		`SELECT * FROM streamingguide.allmedia
	   WHERE streamingguide.allmedia.title LIKE ?;`,
	readAllMediaById:
		`SELECT * FROM streamingguide.allmedia
	   WHERE streamingguide.allmedia.id = ?;`,
	createAllMedia:
		`INSERT INTO streamingguide.allmedia(title, type, releaseDate) VALUES(?,?,?);`,
	updateAllMedia:
		`UPDATE streamingguide.allmedia SET title=?, type=?, releaseDate=? WHERE id = ?;`,
	deleteAllMedia:
		`DELETE FROM streamingguide.allmedia where id = ?;`,
}