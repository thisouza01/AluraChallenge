import depoimentoSchema from "../model/Depoimento.js"

class DepoimentoController {

    static listarDepoimentos = (req, res) => {
        depoimentoSchema
            .find()
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}))
    };
    
    static listarUmDepoimento = async (req, res) => {
        const { id } = req.params;
    
        await depoimentoSchema
            .findById({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}))
    };
  
    static listarTresDepoimentosAleatorios = async (req, res) => {
        await depoimentoSchema
            .aggregate([
                { $sample: { size: 3 } }
            ])
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    };
    
    
   static cadastrarDepoimento = async (req, res) => {
        const resultado = depoimentoSchema(req.body);
        await resultado
            .save() 
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}))
    };
    
    static atualizaDepoimento = async (req, res) => {
        const { id } = req.params;
        const { foto, depoimento, nome } = req.body
        await depoimentoSchema
            .findByIdAndUpdate({ _id: id }, { $set: {foto, depoimento, nome} })
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}))
    };
    
    static deletarDepoimento = async (req, res) => {
        const id = req.params.id;
    
        await depoimentoSchema
            .findByIdAndDelete({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({message: error}))
    };
    
};

export default DepoimentoController;