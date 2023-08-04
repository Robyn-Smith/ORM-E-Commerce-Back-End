const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      //add book as a second model to join with ---jsn comment---- change await? alternative mentioned in tuesday lesson
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({message: 'No Category found with that id'}); //-- change string
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', (req, res) => {
  // create a new category --------------------change categoryData const name?-have already changed err to error
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  if (!categoryData) {
    res.status(404).json({ message: 'No Category found with that id'}); //------change string
    return;
  }

  res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that id'}); //---- change string
      return;
    }

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
