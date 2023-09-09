/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    // Membuat table collaborations
    pgm.createTable('collaborations', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        note_id: {
            type: 'VARCHAR(50)',
            notNull: true,
        },
        user_id: {
            type: 'VARCHAR(50)',
            notNull: true,
        },
    });

    /* Menmabahkan constraint UNIQUE, kombinasi dari kolom note_id dan user_id
        Guna menghidari duplikasi data antara nilai keduanya */
    pgm.addConstraint('collaborations', 'unique_note_id_and_user_id', 'UNIQUE(note_id, user_id)');

    // eslint-disable-next-line max-len
    // Memberikan constraint foreign key pada kolom note_id dan user_id terhadap notes.id dan users.ii
    pgm.addConstraint('collaborations', 'fk_collaborations.note_id_notes.id', 'FOREIGN KEY(note_id) REFERENCES notes(id) ON DELETE CASCADE');
    pgm.addConstraint('collaborations', 'fk_collaborations.user_id_notes.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
    // menghapus tabel collaborations
    pgm.dropTable('collaborations');
};