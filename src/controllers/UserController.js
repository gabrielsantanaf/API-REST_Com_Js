import User from '../models/User'

class UserController{
  async store(req, res) {
    try{
      const { id, nome, email } = await User.create(req.body)

      return res.json({ id, nome, email })
    } catch(err){


      return res.status(400).json({errors: err.errors.map(err => err.message)})
    }
  }

  async index(req, res){
    try{
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] })

      return res.json(users)
    } catch(err){
      return res.json(err)
    }
  }

  async show(req, res){
    try{
      const user = await User.findByPk(req.params.id)

      const { id, nome, email } = user
      return res.json({ id, nome, email })
    } catch(err){
      return res.json(err)
    }
  }

  async update(req, res){
    try{

      const user = await User.findByPk(req.userId)

      if(!user)
        return res.status(400).json({
          errors: ['Usuário não existe.']
      })

      const { id, nome, email } = await user.update(req.body)

      return res.json({ id, nome, email })
    } catch(err){
      return res.status(400).json({errors: err.errors.map(err => err.message)})
    }
  }

    async delete(req, res){
    try{
      const user = await User.findByPk(req.userId)

      if(!user)
        return res.status(400).json({
          errors: ['Usuário não existe.']
      })

      await user.destroy()

      return res.json(null)
    } catch(err){
      return res.status(400).json({errors: err.errors.map(err => err.message)})
    }
  }
}

export default new UserController()
