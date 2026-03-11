'use client';

import { Container } from 'react-bootstrap';
import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const LeafletMap = dynamicImport(() => import('@/components/map/LeafletMap'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: '70vh',
        minHeight: '400px',
        backgroundColor: '#e9ecef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span className="text-muted">Loading map...</span>
    </div>
  ),
});

const MapPage: React.FC = () => (
  <Container fluid className="p-0">
    <div className="p-3 border-bottom bg-white sticky-top">
      <h5 className="mb-1 text-center">Nearby Grocery Stores</h5>
    </div>
    <LeafletMap />
  </Container>
);

export default MapPage;