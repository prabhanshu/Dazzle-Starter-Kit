import React, { PropTypes } from 'react';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import SimpleInlineToolbarEditor from './SimpleInlineToolbarEditor';

const CustomFrame = ({children, onRemove, editable, title}) => {
  return (
    <div className="x_panel fixed_height_320">
      <div className="x_title">
        <SimpleInlineToolbarEditor />
          <p>{title}</p>
          <ul className="nav navbar-right panel_toolbox">
              {editable && <li><a onClick={() => {onRemove();}} className="close-link"><i className="fa fa-close"></i></a>
              </li>}
          </ul>
          <div className="clearfix"></div>
      </div>
      <div className="x_content">
        {children}
      </div>
  </div>
);
};

CustomFrame.propTypes = {
  children: PropTypes.element,
  onRemove: PropTypes.func,
  editable: PropTypes.bool,
  title: PropTypes.string,
};

export default CustomFrame;
