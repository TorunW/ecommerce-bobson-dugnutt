module.exports = (sequelize, DataType) => {
  const Pages = sequelize.define('Pages', {
    title: {
      type: DataType.STRING,
      allowNull: false,
    },
    link: {
      type: DataType.STRING,
      allowNull: false,
    },
    order: {
      type: DataType.STRING,
      allowNull: false,
    },
  });

  return Pages;
};

/*
database:

  Pages
    Titlte
    Link
    Order
    CONSTRAINT link_unique UNIQUE (link)


  Post
    Post id
    page id
    title optional
    content
    type (image text link)
    order
     CONSTRAINT post_id_unique UNIQUE (post_id)

  Store





*/
