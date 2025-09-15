import Aluno from '../models/Aluno'

class AlunoController{
  async index(req, res) {

    res.json('OK')
  }

  async store(req, res) {

  }

  async show(req, res) {
    try{

      const { id } = req.params

      if(!id)
        return res.status(400).json({
          errors: ['Faltando ID']
        })

      const aluno = await Aluno.findAll(id)

      if(!aluno)
        return res.status(400).json({
      errors: ['Aluno não existe']})

      return res.json(aluno)

    } catch(err) {

      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })

    }
  }

  async delete(req, res) {
     try{

      const { id } = req.params

      if(!id)
        return res.status(400).json({
          errors: ['Faltando ID']
        })

      const aluno = await Aluno.findAll(id)

      if(!aluno)
        return res.status(400).json({
      errors: ['Aluno não existe']})

      await aluno.destroy()
      return res.json({
        apagado: true
      })

    } catch(err) {

      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })

    }
  }

  async update(req, res) {
     try{

      const { id } = req.params

      if(!id)
        return res.status(400).json({
          errors: ['Faltando ID']
        })

      const aluno = await Aluno.findAll(id)

      if(!aluno)
        return res.status(400).json({
      errors: ['Aluno não existe']})

      const alunoAtualizado = await aluno.update(req.body)
      return res.json(alunoAtualizado)

    } catch(err) {

      return res.status(400).json({
        errors: err.errors.map(err => err.message)
      })

    }
  }
}

export default new AlunoController()
