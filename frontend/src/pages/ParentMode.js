import React from 'react';
import { useTranslation } from 'react-i18next';

const ParentMode = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="section-title">{t('nav.parentMode')}</h1>
        <div className="card">
          <p className="text-gray-600">Simplified guidance interface for parents - Coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default ParentMode;
