const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      //add book as a second model to JOIN with ----- jsn comment--- change tagData name 
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    
    if (!tagData) {
      res.status(404).json({ message: 'Oops, there are no results matching this id'}); 
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (error) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {where: { id: req.params.id}
    });
    if(!categoryData){
      res.status(404).json({message : "Oops, there are no results matching this id"});
      return
    }
    res.status(200).json(tagData);
  }catch (error) {
    res.status(500).json(err);
};
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Oops, there are no results matching this id' });
      return;
    }

    res.status(200).json(tagData);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
