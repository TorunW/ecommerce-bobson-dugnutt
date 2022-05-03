module.exports = (sequelize, DataType) => {
  const Posts = sequelize.define('Posts', {
    page: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataType.STRING,
      allowNull: true,
    },
    content: {
      type: DataType.STRING,
      allowNull: false,
    },
    type: {
      type: DataType.STRING,
      allowNull: false,
    },
    order: {
      type: DataType.INTEGER,
      allowNull: false,
    },
  });

  return Posts;
};

/*
  Post
    Post id
    page id
    title optional
    content
    type (image, text, link tree, shop item)
    order
     CONSTRAINT post_id_unique UNIQUE (post_id)

*/
