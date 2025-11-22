import React from 'react';

interface OutputAreaProps {
  yamlOutput: string;
  error: string | null;
  copyMessage: string;
  handleCopy: () => void;
}

export const OutputArea: React.FC<OutputAreaProps> = ({
  yamlOutput,
  error,
  copyMessage,
  handleCopy
}) => {
  return (
    <div className="output-box">
      <h3>Generated MythicMobs YAML</h3>
      {error && <p className="error">{error}</p>}
      <button
        className="copy-button"
        onClick={handleCopy}
        disabled={!yamlOutput}
      >
        {copyMessage}
      </button>
      <textarea
        readOnly
        value={yamlOutput}
        placeholder="ここにYAMLコードが生成されます..."
      />
    </div>
  );
};