const StatutBadge = ({ status }) => {
  // Définition manuelle des couleurs (puisqu'on n'a pas Tailwind)
  const styles = {
    "Livré": { backgroundColor: '#dcfce7', color: '#166534' },    // Vert
    "En cours": { backgroundColor: '#dbeafe', color: '#1e40af' }, // Bleu
    "Annulé": { backgroundColor: '#fee2e2', color: '#991b1b' },    // Rouge
    "En attente": { backgroundColor: '#fef9c3', color: '#854d0e' } // Jaune
  };

  const currentStyle = styles[status] || { backgroundColor: '#f3f4f6', color: '#374151' };

  const badgeStyle = {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    display: 'inline-block',
    ...currentStyle
  };

  return <span style={badgeStyle}>{status}</span>;
};

export default StatutBadge;