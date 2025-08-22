import '@univerjs/sheets-ui/lib/index.css';
import { Univer, UniverInstanceType } from '@univerjs/core';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverUIPlugin } from '@univerjs/ui';
import { UniverSheetsPlugin } from '@univerjs/sheets';
import { UniverSheetsUIPlugin } from '@univerjs/sheets-ui';

const univer = new Univer({ locale: 'en' });
univer.installPlugin(new UniverRenderEnginePlugin());
univer.installPlugin(new UniverUIPlugin({ container: 'univer-container' }));
univer.installPlugin(new UniverSheetsPlugin());
univer.installPlugin(new UniverSheetsUIPlugin());
univer.createUnit(UniverInstanceType.UNIVER_SHEET);
