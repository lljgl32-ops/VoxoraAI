cexport default function AvatarCard() {
  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      borderRadius: "12px",
      textAlign: "center"
    }}>
      <img 
        src="/avatar1.jpg" 
        alt="avatar" 
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h3>AI Avatar</h3>
      <p>Realistic Speaker</p>
    </div>
  );
}
