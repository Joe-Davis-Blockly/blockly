// import React from 'react';
// import clsx from 'clsx';
// import {ThemeClassNames} from '@docusaurus/theme-common';
// import LinkItem from '@theme/Footer/LinkItem';
// function ColumnLinkItem({item}) {
//   return item.html ? (
//     <li
//       className={clsx('footer__item', item.className)}
//       // Developer provided the HTML, so assume it's safe.
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{__html: item.html}}
//     />
//   ) : (
//     <li key={item.href ?? item.to} className="footer__item">
//       <LinkItem item={item} />
//     </li>
//   );
// }
// function Column({column}) {
//   return (
//     <div
//       className={clsx(
//         ThemeClassNames.layout.footer.column,
//         'col footer__col',
//         column.className,
//       )}>
//       <div className="footer__title">{column.title}</div>
//       <ul className="footer__items clean-list">
//         {column.items.map((item, i) => (
//           <ColumnLinkItem key={i} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// }
// export default function FooterLinksMultiColumn({columns}) {
//   return (
//     <div className="row footer__links">
//       {columns.map((column, i) => (
//         <Column key={i} column={column} />
//       ))}
//     </div>
//   );
// }


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
