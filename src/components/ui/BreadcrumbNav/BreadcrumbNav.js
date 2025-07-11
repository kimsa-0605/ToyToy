import React from 'react';
import { Link } from 'react-router-dom';
import './BreadcrumbNav.css';

const BreadcrumbNav = ({ pages }) => {
    if (!pages || pages.length === 0) return null;

    return (
        <div id="breadcrumb-nav" class="breadcrumb-nav">
            <div className="breadcrumb-nav-content">
                <div className="breadcrumb-nav-blog">
                    {pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <i className="fa-solid fa-right-long"></i>}
                            <Link to={page.url} className="breadcrumb-nav-link">
                                {page.name}
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default BreadcrumbNav;
