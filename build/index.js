import app from 'farmos-client/src/core/app';
import logs from 'farmos-client/src/field-modules/my-logs/module.config';
import precip from '../src/FieldModule/Precipitation/js/module.config';

app('#app', [logs, precip]);
