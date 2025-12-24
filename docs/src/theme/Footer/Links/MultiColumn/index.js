import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import LinkItem from '@theme/Footer/LinkItem';
function ColumnLinkItem({item}) {
  return item.html ? (
    <li
      className={clsx('footer__item', item.className)}
      dangerouslySetInnerHTML={{__html: item.html}}
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
}
function Column({column}) {
  return (
    <li
      className={clsx(
        ThemeClassNames.layout.footer.column,
        'col footer__col',
        column.className,
      )}>
      <h3 className="footer__title">{column.title}</h3>
      <ul className="footer__items clean-list footer-linkbox-list">
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </li>
  );
}
export default function FooterLinksMultiColumn({columns}) {
  return (
    <nav className="footer__links">
      <ul  className="footer_linkboxes_list">
        {columns.map((column, i) => (
          <Column key={i} column={column} />
        ))}
      </ul>
    </nav>
  );
}
