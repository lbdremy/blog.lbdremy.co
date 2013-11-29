# WebSQL on Android and ios

## Javascript API

The WebSQL API is described by a [W3C specification](http://www.w3.org/TR/webdatabase/) that is nowadays no longer in active maintenance.

#### Open a database

```javascript
window.openDatabase(name,version,description,sizeInOctets,
function onsuccess(db){
 // Open transaction with the `db` variable
},
function onerror(err){
 // Something went wrong when creating/opening the database
 console.error(err);
});
```

#### Update the database schema (version)

The `changeVersion()` method allows scripts to atomically verify the version number and change it at the same time as doing a schema update.

```javascript
db.changeVersion(currentVersion,newVersion,
	function onsuccess(transaction){
		// Update the schema here    
    },
    function onerror(err){
    	// something went wrong
        console.error(err);
    });
```

#### Open a (read/write) transaction and execute SQL query

We assume we have an database open correctly available in `db`.
```javascript
db.transaction(function(transaction){
	var query = 'SELECT * FROM users WHERE id = ? LIMIT 10;';
    var arguments = [ 1 ];
	transaction.executeSql(query,arguments,
    	function onsuccess(transaction, result){
         //
        },
        function onerror(transaction, err){
        
        });
});
```

#### Open a read-only transaction and execute SQL query

```javascript
db.readTransaction(function(transaction){
	var query = 'SELECT * FROM users WHERE id = ? LIMIT 10;';
    var arguments = [ 1 ];
	transaction.executeSql(query,arguments,
    	function onsuccess(transaction, result){
        
        },
        function onerror(transaction, err){
        
        });
});
```

## Android

### Quota

In order to update the quota when the limit is reached on android 4.3 and below, the method [`onExceededDatabaseQuota`](http://developer.android.com/reference/android/webkit/WebStorage.QuotaUpdater.html) of the class WebChromeClient should be overrided. When the method is called an instance of [`WebStorage.QuotaUpdater`](http://developer.android.com/reference/android/webkit/WebStorage.QuotaUpdater.html) is given in argument, use this instance to call the method [`updateQuota`](http://developer.android.com/reference/android/webkit/WebStorage.QuotaUpdater.html#updateQuota(long) to set the new size of the WebSQL storage.

For android 4.4 and above, the method `onExceededDatabaseQuota` is not called anymore and in order to increase the quota limit use the HTML5 / JavaScript Quota Management API. More information is available [here](https://developers.google.com/chrome/whitepapers/storage)

By default the size of the WebSQL database is 5MB. I need to do some test with these two alternatives in order to check the total limit.

## ios
