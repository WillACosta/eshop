/**
 * Grupo de ações disponíveis para as operações de carrinho
 */
export enum ActionTypes {
  Add = '[Product] Adicionar ao carrinho',
  Remove = '[Product] Remover do carrinho',
  LoadItems = '[Products] Carregar itens do servidor',
  LoadSuccess = '[Products] Carregamento completo',
  Clear = 'Limpar todo o carrinho'
}
