import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ nombre: '', telefono: '', servicio: 'Limpieza' });
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.telefono) {
      setMensaje('❌ Por favor, ingresa tu nombre y teléfono.');
      return;
    }
    setMensaje(`🦷 ¡Gracias, ${formData.nombre}! El equipo del Dr. Eddy Vega se comunicará contigo a la brevedad para confirmar tu cita.`);
    setFormData({ nombre: '', telefono: '', servicio: 'Limpieza' });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, sans-serif", backgroundColor: '#f0fdfa', color: '#111827', margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* Navbar */}
      <header style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100, padding: '15px 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#0d9488' }}>🦷 ClinicDent</span>
            <br />
            <span style={{ fontSize: '12px', color: '#6b7280', fontWeight: 'bold' }}>Dr. Eddy Vega de la Paz</span>
          </div>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <a href="#servicios" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Servicios</a>
            <a href="#horarios" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Horarios</a>
            <a href="#contacto" style={{ textDecoration: 'none', backgroundColor: '#0d9488', color: '#fff', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold' }}>Agendar Cita</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #ccfbf1 0%, #ffffff 100%)', padding: '70px 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#111827', marginBottom: '20px' }}>
            Diseñamos tu Sonrisa con Tecnología y Cuidado Profesional
          </h1>
          <p style={{ fontSize: '18px', color: '#4b5563', marginBottom: '30px' }}>
            El Dr. Eddy Vega de la Paz ofrece atención odontológica integral con la mayor comodidad y los más altos estándares de higiene.
          </p>
          <a href="#contacto" style={{ textDecoration: 'none', backgroundColor: '#0d9488', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontWeight: 'bold' }}>
            Agendar Consulta Evaluativa
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '40px', color: '#111827' }}>Nuestros Tratamientos</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {[
            { t: 'Limpieza Dental Ultrasonido', d: 'Eliminación profunda de sarro y placa bacteriana para mantener tus encías sanas.' },
            { t: 'Ortodoncia Estética', d: 'Alineación dental con brackets de última generación para mejorar tu estética y mordida.' },
            { t: 'Endodoncia y Restauración', d: 'Tratamientos especializados para salvar tus piezas dentales sin dolor.' }
          ].map((s, i) => (
            <div key={i} style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #e5e7eb' }}>
              <h3 style={{ color: '#0d9488', marginTop: 0 }}>{s.t}</h3>
              <p style={{ color: '#4b5563', fontSize: '15px', margin: 0, lineHeight: '1.5' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario y Horarios */}
      <section id="horarios" style={{ backgroundColor: '#f3f4f6', padding: '60px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '1 1 450px' }}>
            <h2 style={{ color: '#111827' }}>Horarios del Consultorio</h2>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
              <p style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
                <strong>Lunes a Sábado:</strong> <span>09:00 AM - 07:00 PM</span>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between', margin: 0, paddingTop: '10px' }}>
                <strong>Domingos:</strong> <span style={{ color: '#dc2626', fontWeight: 'bold' }}>Previo Acuerdo</span>
              </p>
            </div>
            <h3 style={{ marginTop: '20px' }}>Contacto Directo</h3>
            <p style={{ color: '#4b5563' }}>📞 Tel: 618-123-4567 | ✉️ contacto@clinicdent.com</p>
          </div>

          <div id="contacto" style={{ flex: '1 1 450px', backgroundColor: '#fff', padding: '30px', borderRadius: '10px', border: '1px solid #e5e7eb' }}>
            <h3 style={{ marginTop: 0 }}>Solicitar Cita Médica</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Tu Nombre Completo" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
              <input type="text" placeholder="Número de Teléfono" value={formData.telefono} onChange={(e) => setFormData({...formData, telefono: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }} />
              <select value={formData.servicio} onChange={(e) => setFormData({...formData, servicio: e.target.value})} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}>
                <option value="Limpieza">Limpieza Dental</option>
                <option value="Ortodoncia">Ortodoncia</option>
                <option value="Blanqueamiento">Blanqueamiento</option>
              </select>
              <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#0d9488', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Enviar Registro</button>
            </form>
            {mensaje && <div style={{ marginTop: '15px', padding: '10px', borderRadius: '6px', backgroundColor: '#f0fdf4', color: '#166534' }}>{mensaje}</div>}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: '#9ca3af', padding: '30px 5%', textAlign: 'center', fontSize: '14px' }}>
        <p>© 2026 ClinicDent - Dr. Eddy Vega de la Paz. Todos los derechos reservados.</p>
        <p style={{ fontSize: '12px', color: '#4b5563', marginTop: '5px' }}>Despliegue final exitoso por Axel Javier Sandoval Sanchez en AWS EC2.</p>
      </footer>
    </div>
  );
}

export default App;
