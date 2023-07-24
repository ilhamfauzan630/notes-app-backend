const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    // eslint-disable-next-line camelcase
    create_at,
    // eslint-disable-next-line camelcase
    update_at,
}) => ({
    id,
    title,
    body,
    tags,
    createAt: create_at,
    updateAt: update_at,
});

module.exports = { mapDBToModel };