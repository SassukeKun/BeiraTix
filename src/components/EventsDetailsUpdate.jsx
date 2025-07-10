// Trecho da página EventDetails.tsx a ser atualizado
// Localizar o botão de compra de ingressos e substituir por este código:

{/* Botão de compra */}
<button
  disabled={!hasSelectedTickets}
  onClick={() => {
    // Preparar os ingressos selecionados para o checkout
    const ticketsForCheckout = Object.entries(selectedTickets)
      .filter(([_, quantity]) => quantity > 0)
      .map(([ticketId, quantity]) => {
        const ticket = eventDetails.ticketTypes.find(t => t.id === parseInt(ticketId));
        return {
          id: parseInt(ticketId),
          name: ticket.name,
          price: ticket.price,
          currency: ticket.currency || 'MZN',
          quantity: quantity
        };
      });
    
    // Navegar para a página de checkout
    goToCheckout(eventDetails.id, ticketsForCheckout);
  }}
  className={`w-full py-3 px-4 rounded-lg font-medium mt-6 ${
    hasSelectedTickets 
      ? 'bg-gray-800 hover:bg-gray-900 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all' 
      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
  }`}
>
  {hasSelectedTickets ? 'Comprar Ingressos' : 'Selecione um Ingresso'}
</button>