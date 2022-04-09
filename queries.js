const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllBusiness = async () => {
  const result = await Business.findAll()
  stringify(result)
}

const findBusinessById = async (id) => {
  const result = await Business.findByPk(id)
  stringify(result)
}

const findBusinessByRating = async () => {
  const result = await Business.findAll({
    where: { rating: 5 }
  })
  stringify(result)
}

const createBusiness = async () => {
  const result = await Business.create({
    name: 'Rando Business 2',
    address: '1234 Main st.',
    rating: 5
  })
  stringify(result)
}

const updateBusiness = async () => {
  const result = await Business.update(
    {
      name: 'Better Name'
    },
    { where: { name: 'Rando Business' } }
  )
  stringify(result)
}

const deleteBusiness = async () => {
  const result = await Business.destroy({ where: { name: 'Rando Business 2' } })
  stringify(result)
}

async function main() {
  try {
    // await deleteBusiness()
    // await updateBusiness()
    // await createBusiness()
    // await findBusinessByRating()
    // await findAllBusiness()
    // await findBusinessById(4)
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
