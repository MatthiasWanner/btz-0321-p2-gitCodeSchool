import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { useGetFile } from '../../api/useGet';

export default function ContentOverview({ fileEndPoint }) {
  const overviewContent = useGetFile(fileEndPoint);

  return (
    <div className="w-full border border-white">
      <ReactMarkdown className="text-white">{overviewContent.datas.name}</ReactMarkdown>
      <ReactMarkdown className="text-white">{overviewContent.datas.content}</ReactMarkdown>
    </div>
  );
}
ContentOverview.propTypes = {
  fileEndPoint: PropTypes.string,
};
