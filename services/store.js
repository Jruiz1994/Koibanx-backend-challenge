class StoreService {
  constructor(model) {this.model = model}

  async getAll() {
    try {
      const respuesta = await this.model.find()
      return respuesta
    } catch (error) {
      throw new Error(error)
    }
  }

  async saveStore(store) {
    try {
      const respuesta = await this.model.create(store)
      return respuesta
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default StoreService;