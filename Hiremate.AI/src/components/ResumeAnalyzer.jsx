const ResumeAnalyzer = () => {
  return (
    <div className="resume-analyzer">
      <h2>ATS Resume Analyzer</h2>
      <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Upload your resume below to get instant AI-driven feedback on ATS compatibility.</p>
      <div style={{ marginTop: '2rem', padding: '3rem', border: '2px dashed var(--border-color)', borderRadius: '1rem', textAlign: 'center' }}>
        <p>Drag and drop your resume (PDF or DOCX) here</p>
        <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Browse Files</button>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
