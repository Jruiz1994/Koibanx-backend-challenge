class StoreService {
  constructor(model) {this.model = model}

  async getAll(options) {
    try {
      const respuestaCruda=await this.model.paginate({},options)
      const respuestaJSON={
        data: respuestaCruda.docs,
        page: respuestaCruda.page,
        pages: respuestaCruda.totalPages,
        limit: respuestaCruda.limit,
        total: respuestaCruda.totalDocs
      }
      return respuestaJSON
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