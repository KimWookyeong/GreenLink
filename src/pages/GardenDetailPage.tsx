import { useParams } from 'react-router-dom';

export default function GardenDetailPage() {
  const { gardenId } = useParams();

  return (
    <div style={{ padding: 24 }}>
      <h1>텃밭 상세</h1>
      <p>선택된 텃밭 ID: {gardenId}</p>
    </div>
  );
}
