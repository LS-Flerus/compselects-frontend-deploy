import React from 'react';

interface MapEmbedProps {
  address?: string;
  zoom?: number;
}

const GoogleMapEmbed: React.FC<MapEmbedProps> = ({
  address = 'Rua das Flores, 123, Jardim das Acácias, São Paulo, SP',
  zoom = 14,
}) => {
  const query = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;

  return (
    <iframe
      title="Localização no Google Maps"
      src={src}
      style={{ border: 0, width: '100%', height: '100%' }}
      loading="lazy"
      allowFullScreen
    />
  );
};

export default GoogleMapEmbed;
