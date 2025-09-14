import Aluno from '../models/Aluno'

class HomeController{
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Otávio',
      email: 'luiz@gmail.com',
      idade: 112,
      peso: 300,
      altura: 2.5
    })

    res.json(novoAluno)
  }
}

export default new HomeController()

/*
index -> Lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PUT OU PATCH
*/
